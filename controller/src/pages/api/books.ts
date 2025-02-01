import { NextApiRequest, NextApiResponse } from 'next';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Conexão com o banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_PATH || '../Model/database.sqlite'
});

// Definição do modelo Livro
const Livro = sequelize.define('Livro', {
  title: { type: Sequelize.STRING, allowNull: false },
  author: { type: Sequelize.STRING, allowNull: false },
  pages: { type: Sequelize.INTEGER },
  type: { type: Sequelize.STRING },
  price: { type: Sequelize.STRING },
  status: { type: Sequelize.STRING },
  cdd: { type: Sequelize.STRING },
  cdu: { type: Sequelize.STRING },
  isbn: { type: Sequelize.STRING }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await sequelize.sync(); // Garante que a tabela está criada

      const { title, author, pages, type, price, status, cdd, cdu, isbn } = req.body;
      const novoLivro = await Livro.create({ title, author, pages, type, price, status, cdd, cdu, isbn });

      return res.status(201).json({ message: 'Livro adicionado com sucesso', livro: novoLivro });
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
      return res.status(500).json({ message: 'Erro ao adicionar livro' });
    }
  }

  return res.status(405).json({ message: 'Método não permitido' });
}
