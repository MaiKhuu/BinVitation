import axios from "axios"

export const getAllBins = async () => {
  const { data } = await axios.get("http://localhost:5000/bins")
  return data
}

export const getBin = async (id) => {
  const { data } = await axios.get(`http://localhost:5000/bins/${id}`)
  return data
}

export const openBin = async (id) => {
  const { data } = await axios.post(`http://localhost:5000/bins/${id}`)
  return data
}

