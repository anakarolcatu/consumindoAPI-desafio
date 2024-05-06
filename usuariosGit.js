const formulario = document.querySelector("#form");
const resultado = document.querySelector(".resultado");

formulario.addEventListener("submit", async (e) => {
    e.preventDefault();
    var usuario = document.querySelector('#usuario').value;

    var mensagemErro = document.querySelector('.erro');
    mensagemErro.innerHTML = '';
    
    try {    
    //Pegando os dados do usuário
    var consultaUsuarios = await fetch(`https://api.github.com/users/${usuario}`);
    var consultaUsuariosConvertida = await consultaUsuarios.json();
    if (consultaUsuariosConvertida.message == "Not Found") {
        throw Error('Usuário não encontrado');
    }
    //console para consulta
    console.log(consultaUsuariosConvertida);
    
    exibirInfoUsuario(consultaUsuariosConvertida);
    } catch(erro) {
        mensagemErro.innerHTML = `<p>Usuário não encontrado</p>`;
        console.log(erro);
    }
});

//função para extrair os valores desejados
function exibirInfoUsuario(consultaUsuariosConvertida) {
    const {
        name,
        followers,
        public_repos: repositorios,
        blog,
        company,
        location,
        created_at: inicio
    } = consultaUsuariosConvertida;

    //converter data formato ISO para padrão
    const dataConvertida = new Date(inicio);

    //exibindo os valores
    resultado.innerHTML = `
        <p>Usuário: ${name || 'não informado'}</p>
        <p>Número de seguidores: ${followers || 'não informado'}</p>
        <p>Localização: ${location || 'não informado'}</p>
        <p>Empresa: ${company || 'não informado'}</p>
        <p>Usuário desde: ${dataConvertida || 'não informado'}</p>
        <p>Blog: ${blog}</p>
        <p>Número de repositórios públicos: ${repositorios || 'não informado'}</p>
        `;
    
    console.log(`
        Usuário: ${name || 'não informado'}
        Número de seguidores: ${followers || 'não informado'}
        Localização: ${location || 'não informado'}
        Empresa: ${company || 'não informado'}
        Usuário desde: ${dataConvertida || 'não informado'}
        Blog: ${blog}
        Número de repositórios públicos: ${repositorios || 'não informado'}`);
}


    