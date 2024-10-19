import express from 'express'

const route = express.Router()

const mobil = [
    {
        merk : "Toyota",
        model : "Avanza",
        warna : "Hitam",
        tahun : 2021
    },
    {
        merk : "Porsche",
        model : "sport",
        warna : "Kuning",
        tahun : 2024
    }
]

const burung = [
    {
        nama: "Merpati",
        warna: "Putih",
        ukuran: "Sedang",
        habitat: "Kota dan pedesaan"
    },
    {
        nama: "Elang",
        warna: "Coklat",
        ukuran: "Besar",
        habitat: "Pegunungan"
    }
]

route.get("/mobil", (req, res) => {
    res.send(mobil)
})

route.get("/burung", (req, res) => {
    res.send(burung)
})
export default route;