import express from "express";

const produtos = [
  {
    id: 1,
    nome: "Mouse",
    categoria: "Eletrônico",
    preco: 49.9,
  },
  {
    id: 2,
    nome: "Teclado",
    categoria: "Eletrônico",
    preco: 69.9,
  },
];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const produto = produtos.find((p) => p.id == id);

  if (!produto) {
    res.json({ message: "Produto não encontrado" });
    return;
  }

  res.json(produto);
});

app.listen(8080, () =>
  console.log("Server is running at http://localhost:8080/")
);