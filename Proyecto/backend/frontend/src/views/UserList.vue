<template>
    <v-container>
      <h1 class="text-center">User Management</h1>
      <v-btn color="primary" class="mb-4" @click="createUser">Create User</v-btn>
  
      <v-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <v-btn color="warning" @click="editUser(user)">Edit</v-btn>
              <v-btn color="red" class="ml-2" @click="deleteUser(user.id)">Delete</v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </template>
  
  <script>
  import UserService from '@/services/UserService';
  
  export default {
    data() {
      return {
        users: []
      };
    },
    methods: {
      async fetchUsers() {
        const response = await UserService.getUsers();
        this.users = response.data;
      },
      createUser() {
        // Aquí iría la navegación a una vista de creación
      },
      editUser(user) {
        // Aquí iría la navegación a una vista de edición con user.id
      },
      async deleteUser(id) {
        await UserService.deleteUser(id);
        this.fetchUsers();
      }
    },
    mounted() {
      this.fetchUsers();
    }
  };
  </script>
  