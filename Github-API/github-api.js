const { Octokit } = require("@octokit/core");

const TOKEN = "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";

const octokit = new Octokit({
    auth: TOKEN
});

async function makeRequestUser(user) {
    const data = await octokit.request('GET /users/{username}', {
        username: user,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    console.log("¿Cómo puedo obtener información disponible públicamente sobre un usuario?")
    console.log(data.data)
}

async function makeRequestGetPRs(owner, repo){
    const data = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
        owner: owner,
        repo: repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    console.log("¿Cómo puedo enumerar todas los pull request de un repositorio?")
    console.log(data.data)
}

async function makeRequestGetPRsClosed(owner, repo){
    const data = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
        owner: owner,
        repo: repo,
        state: 'closed',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
    console.log("¿Cómo puedo obtener todos los pull request cerrados de un repositorio?")
    console.log(data.data)
}

async function createPR(){
    const data = await octokit.request('POST /repos/{owner}/{repo}/pulls', {
        owner: "chandler-pc",
        repo: "chandler-pc",
        title: 'EJEMPLO PR GITHUB API',
        body: 'Cambiosss',
        head: "prueba",
        base: 'main',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    console.log("¿Cómo puedo crear un nuevo pull request?")
    console.log(data.data)
}

//makeRequestUser("chandler-pc")
//makeRequestGetPRs("godotengine", "godot")
//makeRequestGetPRsClosed("godotengine", "godot")
//createPR()

