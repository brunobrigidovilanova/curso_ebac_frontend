function Pessoa(nome) {
    this.nome = nome;
    this.dizBemVindo = function() {
        console.log("Bem vindo, meu nome é " + this.nome);
    }
}

function Professor(nome, materia, turno) {
    this.materia = materia;
    this.turno = turno;

    Pessoa.call(this, nome);
}

function Aluno(nome, classe, turno) {
    this.classe = classe;
    this.turno = turno;

    Pessoa.call(this, nome);
}

const pessoa1 = new Pessoa("Joana");
const pessoa2 = new Pessoa("Mario");
const professor1 = new Professor("Joana", "historia", "verpertino");
const professor2 = new Professor("Marcelo", "matematica", "noturno");
const aluno1 = new Aluno("Maria", "nono", "matutino");
const aluno2 = new Aluno("Clovis", "segundo", "vespertino");

console.log(pessoa1);
console.log(pessoa2);
console.log(professor1);
console.log(professor2);
console.log(aluno1);
console.log(aluno2)

professor1.dizBemVindo();