$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();

        // Obter o valor do campo de entrada
        const task = $('#task-input').val();

        // Adicionar a tarefa à lista com um botão de exclusão
        $('#task-list').append('<li><span>' + task + '</span></li>');

        // Limpar o campo de entrada
        $('#task-input').val('');
    });

    // inserindo o evento de clique para os itens da lista
    $('#task-list').on('click', 'li', function(e) {
        if (!$(e.target).is('button')) {
            $(this).find('span').toggleClass('line-through');
        }
    });

    // Limpar todas as tarefas
    $('#clear-tasks').on('click', function() {
        $('#task-list').empty();
    });
});