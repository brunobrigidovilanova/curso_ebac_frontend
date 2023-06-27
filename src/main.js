const alunos = [];

const alunosMatriculados = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        nota: ''
    }
})

alunosMatriculados.push({
    nome: 'Lucio',
    nota: 6
})

alunosMatriculados.push({
    nome: 'Maria',
    nota: 8
})

alunosMatriculados.push({
    nome: 'João',
    nota: 9
})

alunosMatriculados.push({
    nome: 'Clovis',
    nota: 4
})

alunosMatriculados.push({
    nome: 'Laura',
    nota: 10
})

alunosMatriculados.push({
    nome: 'Marcelo',
    nota: 1
})

alunosMatriculados.push({
    nome: 'Robson',
    nota: 7
})

function filtraAlunoQueAprovou(aluno) {
    return aluno.nota >= '6';
}

const alunosAprovados = alunosMatriculados.filter(filtraAlunoQueAprovou)

console.log(alunosMatriculados)
console.log(alunosAprovados)
