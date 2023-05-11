$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $('#nome-tarefa').val('')

        $('p').bind('click', function() {
        $(this).css('text-decoration' , 'line-through');
        })
    })
})