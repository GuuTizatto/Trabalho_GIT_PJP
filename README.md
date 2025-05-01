**Sistema de Agendamento**

*Este é um sistema que permite o usuário, após efetuar um login, poder gerar agendamentos, marcar como concluídos, filtra-los e apaga-los.*

**IDE utilizada:** *Visual Studeo*

✅ **Requisitos Funcionais (RF)**
*São as funcionalidades que o sistema precisa oferecer.*

RF01 – Cadastro de tarefas:
O sistema deve permitir que o usuário cadastre uma nova tarefa com título, descrição, data e hora.

RF02 – Exclusão de tarefas:
O sistema deve permitir a exclusão de tarefas da lista.

RF03 – Marcar como concluída:
O sistema deve permitir que o usuário marque uma tarefa como concluída.

RF04 – Exibir tarefas por prioridade (hora):
O sistema deve ordenar as tarefas do dia por horário, da mais próxima para a mais distante.

RF05 – Filtrar tarefas concluídas/não concluídas:
O sistema deve permitir a visualização apenas de tarefas concluídas ou apenas as pendentes.

RF06 – Notificações:
O sistema pode notificar o usuário antes do horário da tarefa.

RF07 - Login:
O sistema terá sistema de Login entre usuários. <!--(Bug onde não será possivel navegar entre Perfis com Agendamentos diferentes) -->

🔒 **Requisitos Não Funcionais (RNF)**
*São critérios de qualidade e restrições técnicas.*

RNF01 – Interface amigável
A interface deve ser simples, intuitiva e de fácil navegação.

RNF02 – Performance
O sistema deve carregar a lista de tarefas e permitir interações com tempo de resposta inferior a 2 segundos.

RNF03 – Armazenamento persistente
As tarefas devem ser salvas de forma que não se percam ao fechar o navegador ou app (ex: banco de dados local, Firebase, ou backend).

RNF04 – Responsividade
O sistema deve funcionar em diferentes dispositivos (smartphone, tablet, computador). <!-- Não testado -->

RNF05 – Segurança de dados
Os dados do usuário devem ser protegidos contra perda ou acesso não autorizado.

RNF06 – Escalabilidade (opcional)
O sistema deve ser estruturado de forma que possa ser escalado no futuro para múltiplos usuários. <!-- Não Implementado completamente -->

🔹 **Modelo de Negócio - Freemium (Grátis + Plano Premium)**
*Como funciona:*

Funções básicas (criação de tarefas, filtros, login) são gratuitas.

Recursos avançados (notificações, calendário, tarefas compartilhadas, backup em nuvem, tags personalizadas) são pagos.

*Exemplo de preços:*

Grátis: uso individual com limite de tarefas.

Premium: R$9,90/mês com recursos extras e sincronização.