# Desafio Back-End AmeDigital

Para fins de estudos, construi essa API seguindo os requisitos de um desafio da empresa Ame Digital.
- [Enunciado do desafio](https://github.com/AmeDigital/challenge-back-end-hit) <br />
Se tiver algum feedback, fique a vontade de mandar uma Issue ou me chamar no LinkedIn
- [Meu LinkedIn](https://www.linkedin.com/in/phmc99/)


## Documentação da API

#### Retorna todos os itens

```
  GET /planets?page=1&per_page=10
```
- *parâmetros de query são opcionais*

#### Retorna um planeta pelo nome

```
  GET /planets?name=tatooine
```

#### Retorna um planeta pelo id (uuid)

```
  GET /planets/d40f9614-4425-11ed-b878-0242ac120002
```

#### Cria um planeta

```
  POST /planets
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do novo planeta |
| `climate`      | `string` | **Obrigatório**. Clima do novo planeta |
| `terrain`      | `string` | **Obrigatório**. Terreno do novo planeta |

#### Remove um planeta

```
  DELETE /planets/d40f9614-4425-11ed-b878-0242ac120002
```
