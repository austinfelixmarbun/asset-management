<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const api = "http://localhost:3000/asset";
const assets = ref([]);
const form = ref({ asset_name: "", stock_quantity: 0, category: "Consumable" });
const editingId = ref(null);

const fetchAssets = async () => {
  const response = await axios.get(api);
  assets.value = response.data;
};

const submitForm = async () => {
  if (editingId.value) {
    await axios.patch(`${api}/${editingId.value}`, form.value);
  } else {
    await axios.post(api, form.value);
  }
  form.value = { asset_name: "", stock_quantity: 0, category: "Consumable" };
  editingId.value = null;
  fetchAssets();
};

const editAsset = (asset) => {
  form.value = { ...asset };
  editingId.value = asset.asset_id;
};

const deleteAsset = async (id) => {
  await axios.delete(`${api}/${id}`);
  fetchAssets();
};

onMounted(fetchAssets);
</script>

<template>
  <div style="padding: 20px; font-family: sans-serif">
    <h2>Fumindo Asset Management</h2>

    <form
      @submit.prevent="submitForm"
      style="margin-bottom: 20px"
    >
      <input
        v-model="form.asset_name"
        placeholder="Asset Name"
        required
      />
      <input
        v-model.number="form.stock_quantity"
        type="number"
        placeholder="Quantity"
        required
      />
      <select v-model="form.category">
        <option value="Consumable">Consumable</option>
        <option value="Non-Consumable">Non-Consumable</option>
      </select>
      <button type="submit">{{ editingId ? "Update" : "Add" }} Asset</button>
    </form>

    <table
      border="1"
      cellPadding="10"
      style="border-collapse: collapse; width: 100%"
    >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="asset in assets"
          :key="asset.asset_id"
        >
          <td>{{ asset.asset_id }}</td>
          <td>{{ asset.asset_name }}</td>
          <td>{{ asset.stock_quantity }}</td>
          <td>{{ asset.category }}</td>
          <td>
            <button @click="editAsset(asset)">Edit</button>
            <button @click="deleteAsset(asset.asset_id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
