# Contribuindo para Agenda Tech Brasil

Agradecemos seu interesse em contribuir para o Agenda Tech Brasil! Este documento contém as diretrizes para contribuir para este repositório.

## Como Contribuir?

### Adicionando um Novo Evento

Para adicionar um novo evento ou agenda, siga os passos abaixo:

1. **Escolha o Template Correto**: No repositório, temos templates de issue específicos para cada tipo de evento/agenda:
   - **💙 Criar Evento/Agenda - Presencial**
   - **🧡 Criar Evento/Agenda - Híbrido**
   - **💜 Criar Evento/Agenda - Online**

   Escolha o template que melhor se adequa ao tipo de evento/agenda que você deseja adicionar.

2. **Crie uma Nova Issue**: Utilize o template escolhido para criar uma nova issue. Preencha todos os campos necessários como data, nome do evento, local (se aplicável), e descrição.

3. **Automatização**: Após a issue ser submetida, uma automação via GitHub Actions será acionada. Esta automação adiciona o evento ao arquivo `src/db/database.json` e gera um novo markdown com as informações do evento.

4. **Abertura de Pull Request**: Uma vez que a automação processa as alterações, um Pull Request será aberto automaticamente para a aprovação das mudanças. A equipe de mantenedores irá revisar o PR e, se tudo estiver conforme esperado, aprovará a adição.

### Cancelando um Evento

Para cancelar um(a) evento/agenda existente:

1. **Template para Remoção**: Utilize o template de issue para cancelamento de eventos/agendas disponível no repositório:
    - 💔 Cancelar Evento/Agenda

2. **Crie uma Nova Issue**: Preencha o template com as informações necessárias para identificar claramente o evento que precisa ser removido.

3. **Processamento Automático**: Assim como na adição de eventos, o cancelamento deles também é automatizado. Uma vez que a issue é submetida, o GitHub Actions irá atualizar o arquivo `src/db/database.json` para remover o evento e ajustar o markdown gerado.

4. **Pull Request para Remoção**: Um Pull Request será aberto automaticamente para que a remoção seja aprovada pelos mantenedores.

## Diretrizes Gerais

- **Respeite os Templates**: Utilizar os templates de forma correta ajuda a manter a organização e eficiência do processo.
- **Seja Claro e Objetivo**: Ao preencher as issues, seja claro em suas descrições para evitar confusões e atrasos no processo de revisão.
- **Siga o Fluxo de Trabalho Proposto**: Adições e remoções de eventos são gerenciadas por automações configuradas para simplificar o processo e garantir a integridade das informações.

Obrigado por contribuir para o Eventos Tech Brasil! Sua participação é essencial para mantermos o repositório atualizado e útil para todos.

