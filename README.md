**Participantes**: [Gilson Santos](https://github.com/gilsonsantos03) e [Matheus Figueiredo](https://github.com/matheusF23)

# Groceries gRPC

Esta aplicação é uma implementação do rabbitmq com NodeJS para exemplificar uma comunicação cliente-servidor no cenário de um supermercado.

## Clonar projeto

Use o comando para clonar o projeto em seu computador
```
$ git clone git@github.com:matheusF23/groceries-grpc.git
```

## Instalação das dependências

Para instalar as dependências use o comando:
```
$ yarn install
```

## Execução do projeto

É necessário ter o docker instalado para poder rodar o rabbitmq, ou você pode rodar o rabbitmq em algum outro local e alterar as variáveis de ambiente `RABBITMQ_HOST` e `RABBITMQ_PORT` para indicar onde o rabbitmq está sendo executado.

Se estiver usando o docker, basta, via terminal, executar no local do projeto o seguinte comando: 

```
$ docker-compose up
```

Com isso, o rabbitmq já deve estar sendo executado. Para saber se está tudo certo, basta acessar via navegador: `http://localhost:15672`. Deve aparecer uma área de login do rabbitmq!

Uma vez que o rabbitmq está funcionando corretamente e estando na pasta do projeto é necessário executar o servidor e o cliente. Para executar o servidor utilize:

```
$ yarn server
```

Para executar o cliente utilize:
```
$ yarn client
```

# Fluxo de execução

O projeto objetiva realizar o seguinte fluxo:

![image](https://user-images.githubusercontent.com/54044801/145727206-000994d0-828f-4166-8769-2a0b08eed8dc.png)
