function Cliente(nomeCompleto, telefone, emailContato, endereco) {
    this._nomeCompleto = nomeCompleto;
    this._telefone = telefone;
    this._emailContato = emailContato;
    this._endereco = endereco;

    this.getNomeCompleto = function () {
        return this._nomeCompleto;
    };

    this.setNomeCompleto = function (novoNome) {
        this._nomeCompleto = novoNome;
    };

    this.getTelefone = function () {
        return this._telefone;
    };

    this.setTelefone = function (novoTelefone) {
        this._telefone = novoTelefone;
    };

    this.getEmailContato = function () {
        return this._emailContato;
    };

    this.setEmailContato = function (novoEmail) {
        this._emailContato = novoEmail;
    };

    this.getEndereco = function () {
        return this._endereco;
    };

    this.setEndereco = function (novoEndereco) {
        this._endereco = novoEndereco;
    };

    this.getDescricao = function () {
        return `\n--------------\nDetalhes do Cliente:\n${this._nomeCompleto}\n--------------\nTelefone:\nDDD: ${this._telefone.getDdd()}\nNúmero: ${this._telefone.getNumero()}\n--------------\nEndereço:\nRua: ${this._endereco.getRua()}\nNúmero: ${this._endereco.getNumeroResidencia()}\nCidade: ${this._endereco.getCidade()}\nEstado: ${this._endereco.getEstado()}\n--------------`;
    };
}

function Telefone(ddd, numero) {
    this._ddd = ddd;
    this._numero = numero;

    this.getDdd = function () {
        return this._ddd;
    };

    this.setDdd = function (novoDdd) {
        this._ddd = novoDdd;
    };

    this.getNumero = function () {
        return this._numero;
    };

    this.setNumero = function (novoNumero) {
        this._numero = novoNumero;
    };
}

function Endereco(estado, cidade, rua, numeroResidencia) {
    this._estado = estado;
    this._cidade = cidade;
    this._rua = rua;
    this._numeroResidencia = numeroResidencia;

    this.getEstado = function () {
        return this._estado;
    };

    this.setEstado = function (novoEstado) {
        this._estado = novoEstado;
    };

    this.getCidade = function () {
        return this._cidade;
    };

    this.setCidade = function (novaCidade) {
        this._cidade = novaCidade;
    };

    this.getRua = function () {
        return this._rua;
    };

    this.setRua = function (novaRua) {
        this._rua = novaRua;
    };

    this.getNumeroResidencia = function () {
        return this._numeroResidencia;
    };

    this.setNumeroResidencia = function (novoNumero) {
        this._numeroResidencia = novoNumero;
    };
}

function ordenarClientesPorNome(clientes) {
    return clientes.slice().sort((a, b) => a.getNomeCompleto().localeCompare(b.getNomeCompleto()));
}

let clientes = [
    new Cliente("Felipe Nascimento", new Telefone("11", "988887777"), "felipe.nascimento@mail.com", new Endereco("SP", "São Paulo", "Rua das Palmeiras", "45")),
    new Cliente("Juliana Ribeiro", new Telefone("21", "977776666"), "juliana.ribeiro@mail.com", new Endereco("RJ", "Rio de Janeiro", "Av. Atlântica", "123")),
    new Cliente("Ricardo Alves", new Telefone("31", "966665555"), "ricardo.alves@mail.com", new Endereco("MG", "Belo Horizonte", "Rua da Liberdade", "200")),
    new Cliente("Mariana Souza", new Telefone("41", "955554444"), "mariana.souza@mail.com", new Endereco("PR", "Curitiba", "Av. das Araucárias", "67")),
    new Cliente("Eduardo Fernandes", new Telefone("51", "944443333"), "eduardo.fernandes@mail.com", new Endereco("RS", "Porto Alegre", "Rua dos Andradas", "98")),
    new Cliente("Vanessa Martins", new Telefone("61", "933332222"), "vanessa.martins@mail.com", new Endereco("DF", "Brasília", "Setor Sul", "101")),
    new Cliente("Leonardo Costa", new Telefone("71", "922221111"), "leonardo.costa@mail.com", new Endereco("BA", "Salvador", "Rua do Carmo", "302")),
    new Cliente("Amanda Rocha", new Telefone("81", "911110000"), "amanda.rocha@mail.com", new Endereco("PE", "Recife", "Av. Boa Viagem", "78")),
    new Cliente("Thiago Mendes", new Telefone("85", "900009999"), "thiago.mendes@mail.com", new Endereco("CE", "Fortaleza", "Beira Mar", "305")),
    new Cliente("Carla Oliveira", new Telefone("95", "988889999"), "carla.oliveira@mail.com", new Endereco("RR", "Boa Vista", "Centro", "12"))
];

let clientesOrdenados = ordenarClientesPorNome(clientes);

clientesOrdenados.forEach(cliente => console.log(cliente.getDescricao()));
