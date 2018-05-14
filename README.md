# Screenshooter

Pacote de captura de páginas da web.

### Requerimentos
- NodeJS
- npm

### Instalação
- **npm install:** Executa a instalação das dependências do projeto.

### Execução
- **npm start:** Executa o loop de captura de todas as URLs presentes em **"pages.json"** . Os arquivos de imagem estarão presentes em um novo diretório, na pasta 'prints', dentro do caminho do projeto.

 ### Arquivos Importantes
 - **screenshot.js:** Script contendo as configurações de captura de imagem, como altura e largura da página, delay para captura e qualidade da imagem. O arquivo também possui o loop principal para as capturas de imagem.
 - **pages.json:** Arquivo JSON contendo os nomes e as URLs das páginas a serem capturadas.