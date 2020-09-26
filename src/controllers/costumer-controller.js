const Costumer = require('../app/models/costumer');

exports.post = async function (req, res) {
  const { name, email, password } = req.body;
  const costumer = await Costumer.create({
      name,
      email,
      password
  });

  await costumer.save((error) => {
      if(error)
          res.status(500).json(
              {
                  message: "Error ao tentar salvar um novo cliente " + error
              }
          );

      res.status(201).json({message: 'Cliente inserido com sucesso'});
  });
};

exports.getAll = async function (req, res) {
  try {
      const costumers = await Costumer.find();

      return res.status(200).send({ costumers });

  } catch (err) {
      return res.status(400).send({ error: 'Erro ao carregar Costumers '});
  }
};

exports.getById = async function (req,res) {
  try {
      const costumer = await Costumer.findById(req.params.costumerId);

      return res.status(200).send({ costumer });

  } catch (err) {
      return res.status(400).send({ error: 'Erro ao carregar Costumer '});
  }
};