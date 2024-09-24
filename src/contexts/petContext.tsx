"use client";
interface PetContextProviderProps {
  children: React.ReactNode;
  data: Pet[];
}
type TPetContext = {
  Pets: Pet[];
  SelectedPetId: string | null;
  handleChangeSelectedPetId: (id: string) => void;
  SelectedPet: Pet | undefined;
  numberofPet: number;
  handleCheckoutPet: (id: string) => Promise<void>;
  handleAddPet: (newPet: Omit<Pet, "id">) => Promise<void>;
  handleEdit: (Petid: string, newPetData: Omit<Pet, "id">) => Promise<void>;
};

import { addPet, deletePet, editPet } from "@/actions/actions";
import { Pet } from "@/lib/types";
import { Palanquin } from "next/font/google";
import React, { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";

export const Petcontext = createContext<TPetContext | null>(null);

function PetContextProvider({ children, data }: PetContextProviderProps) {
  // state
  const [optimisticPet, setoptimisticPet] = useOptimistic(
    data,
    (state, { action, payload }) => {
      switch (action) {
        case "add":
          return [...state, { ...payload, id: Math.random().toString() }];
        case "edit":
          return state.map((pet) => {
            if (pet.id === payload.id) {
              return { ...pet, ...payload.newPetData };
            }
            return pet;
          });
        case "delete":
          return state.filter((pet) => pet.id !== payload);
        default:
          return state;
      }
    }
  );
  //  const [Pets, setPets] = useState(data)
  const [SelectedPetId, setSelectedPetId] = useState<string | null>(null);

  //  dervide state
  const SelectedPet = optimisticPet.find((pet) => pet.id === SelectedPetId);
  const numberofPet = optimisticPet.length;
  // if the return value of filter is true, the element will stay in the array

  //  Event handlers / actions
  const handleAddPet = async (newPet: Omit<Pet, "id">) => {
    setoptimisticPet({ action: "add", payload: newPet });
    const error = await addPet(newPet);
    if (error) {
      toast.warning(error.message);
      return;
    }
  };

  const handleEdit = async (Petid: string, newPetData: Omit<Pet, "id">) => {
    setoptimisticPet({
      action: "edit",
      payload: {
        id: Petid,
        newPetData,
      },
    });
    const error = await editPet(Petid, newPetData);
    if (error) {
      toast.warning(error.message);
      return;
    }
  };

  const handleCheckoutPet = async (Petid: string) => {
    setoptimisticPet({ action: "delete", payload: Petid });
    const error = await deletePet(Petid);
    if (error) {
      toast.warning(error.message);
      return;
    }
    setSelectedPetId(null);
  };

  const handleChangeSelectedPetId = (id: string) => {
    setSelectedPetId(id);
  };

  return (
    <Petcontext.Provider
      value={{
        Pets: optimisticPet,
        SelectedPetId,
        SelectedPet,
        numberofPet,
        handleChangeSelectedPetId,
        handleCheckoutPet,
        handleAddPet,
        handleEdit,
      }}
    >
      {children}
    </Petcontext.Provider>
  );
}

export default PetContextProvider;
