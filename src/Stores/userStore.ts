import { create } from 'zustand';

// Define the user type
type User = {
    name: string;
    email: string;
    age: number;
    profession: string;
    password: string;
    gender: string;
}

// Define the state and actions for the Zustand store
type UserState = {
    users: User[]; // List of users
    addUser: (user: User) => void; // Function to add a user
    removeUser: (name: string) => void; // Function to remove a user by name
}

// Create Zustand store
export const useUserStore = create<UserState>((set) => ({
    users: [], // Initial state of users

    // Action to add a user
    addUser: (user: User) => set((state) => ({
        users: [...state.users, user]
    })),

    // Action to remove a user
    removeUser: (name: string) => set((state) => ({
        users: state.users.filter((user) => user.name !== name)
    }))
}));
