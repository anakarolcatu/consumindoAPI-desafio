# Missão da Semana: Explorando Usuários do GitHub 🐈‍⬛  com async/await ⏱️
Apresentamos uma nova missão ! Neste exercício, você mergulhará no mundo do GitHub, utilizando async/await para consultar a API e exibir informações de usuários no console.

## Passos a Seguir:

### 1. Criar uma Função Assíncrona:
- Comece definindo uma função chamada **obterInfoUsuarioGitHub** com **async** no início.

### 2. Consulta à API do GitHub:
- Dentro desta função, você usará **fetch** para solicitar dados à API do GitHub.
- O URL de exemplo é **https://api.github.com/users/octocat**, mas sinta-se à vontade para substituir **octocat** pelo nome de qualquer usuário que você esteja interessado.

### 3. Aguardar a Resposta e Transformar os Dados:
- Use **await** para aguardar a resposta da solicitação.
- Em seguida, certifique-se de converter os dados recebidos para o formato JSON.

### 4. Visualização de Informações no Console:
- Assim que os dados estiverem disponíveis, exiba no console algumas propriedades importantes, como nome, seguidores e repositórios do usuário.

### 5. Tratamento de Erros:
- Não se esqueça de adicionar um bloco **try/catch** para lidar com possíveis erros que possam ocorrer durante a solicitação à API.

*Lembre-se de que você pode personalizar o URL da API para explorar as informações de qualquer usuário do GitHub que desejar! Boa sorte e divirta-se aprendendo com este exercício!*
