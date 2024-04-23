*Fluxo de Atividades*

Este projeto consiste em uma aplicação web simples para registrar atividades e exportá-las para um arquivo de texto. A aplicação permite o registro de atividades com informações como tipo (início ou término), hora, data e uma descrição opcional. Os registros são armazenados localmente no navegador do usuário usando o localStorage.



![fluxo de atividade](https://github.com/ViniScooper/fluxo-de-atividade/assets/93687902/132dc1bd-e2f7-4fa1-bfaa-5ad747c3f9ce)





*Funcionalidades Principais*

Registro de Atividades:

Dois botões "Registrar início" e "Registrar término" permitem ao usuário registrar o início e o término de uma atividade.
Ao clicar em um dos botões, uma caixa de diálogo solicita ao usuário que descreva a atividade.
Os registros são salvos com informações como tipo (início ou término), hora, data e descrição.

Exportar para TXT:
O botão "Exportar para TXT" permite ao usuário exportar todos os registros para um arquivo de texto.
Cada registro é formatado com o tipo, hora, data e descrição (se houver), separados por linha.


Resetar Dados:
O botão "Resetar Dados" permite ao usuário limpar todos os registros armazenados localmente.
Uma confirmação é solicitada antes de resetar os dados.
Lista de Registros:
Uma lista é exibida na página, mostrando todos os registros de atividades.
Cada item na lista exibe o tipo de atividade, hora, data e descrição (se houver).


Observações
Este projeto utiliza JavaScript para interatividade na interface, incluindo a manipulação do localStorage para armazenar os registros.
O CSS é usado para estilizar a aplicação e torná-la mais amigável ao usuário.
Este projeto, chamado "Fluxo de Atividades", oferece uma maneira simples e eficaz de registrar e acompanhar atividades, permitindo ao usuário exportar os registros quando necessário e também resetar os dados quando desejado.
