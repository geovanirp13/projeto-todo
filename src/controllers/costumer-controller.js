const repositoryCostumer = require('../repositories/costumer-repository');

exports.post = async (req, res) => {

  try {
    await repositoryCostumer.post({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).send({ 
      message: 'Costumer cadastrado com sucesso!'
    });

  } catch(error) {
    console.log(error);
    res.status(500).send({
      message: 'Falha ao processar a requisição!'
    })
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await repositoryCostumer.getAll();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Falha ao processar requisição!',
      erro: error
    });
  }
};

exports.getById = async (req, res) => {
  try {
      const id = req.params.costumerId;
      const data = await repositoryCostumer.getById(id);
      res.status(200).send(data);
  } catch (error) {
      res.status(500).send({
          message: "Falha ao processar requisição",
          erro: error
      });
  }
};

exports.put = async (req, res) => {
  try {
      const id = req.params.costumerId;
      const data = await repositoryCostumer.put(id, req.body);
      res.status(200).send({
          message: "Costumer atualizado com sucesso",
          dados: data
      })
  } catch (error) {
      res.status(500).send({
          message: "Falha ao processar requisição.",
          erro: error
      });
  }
};

exports.delete = async (req, res) => {
  try {
      await repositoryCostumer.delete(req.body.id)
      res.status(200).send({
          message: "Costumer removido com sucesso."
      });
  } catch (error) {
      res.status(500).send({
          message: "Falha ao processar requisição.",
          erro: error
      });
  }
}