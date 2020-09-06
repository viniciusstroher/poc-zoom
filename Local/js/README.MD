* Pegar auth no site do ngrok e trocar em zoom-endpoint em authtoken para poder gerar o link de redirecionamento.

* Cada vez que iniciar o ngrok é preciso trocar o whitelist e o redirect_url de desenvolvimento
do plugin de oauth (nao confundir com o de jwt).

* Sempre que link do ngrok mudar, trocar em
    * App Credentials .
        * Redirect URL for OAuth.
        * Whitelist URL.

 
## O plugin de jwt serve para pegar as informaçoes do usuario, será usado para criar a meeting.

## Lista de Tarefas
https://github.com/viniciusstroher/poc-zoom/blob/master/Local/js/TODO.MD




