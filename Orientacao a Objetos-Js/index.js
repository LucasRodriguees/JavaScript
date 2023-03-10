import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo",10000,11122233389);
diretor.cadastrarSenha("123");
const gerente = new Gerente("Ricardo",5000,11122233356);
gerente.cadastrarSenha("12345");

const estaLogado = SistemaAutenticacao.login(gerente, "12345");

console.log(estaLogado);

