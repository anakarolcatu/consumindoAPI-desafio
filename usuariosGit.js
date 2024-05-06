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
        <p>Usuário: ${name}</p>
        <p>Número de seguidores: ${followers}</p>
        <p>Localização: ${location}</p>
        <p>Empresa: ${company}</p>
        <p>Usuário desde: ${dataConvertida}</p>
        <p>Blog: ${blog}</p>
        <p>Número de repositórios públicos: ${repositorios}</p>
        `;
    
    console.log(`
        Usuário: ${name}
        Número de seguidores: ${followers}
        Localização: ${location}
        Empresa: ${company}
        Usuário desde: ${dataConvertida}
        Blog: ${blog}
        Número de repositórios públicos: ${repositorios}`);
}


    