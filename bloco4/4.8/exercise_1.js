        //mudar background fundo escuro
        const botaoTelaBlack = document.getElementById('btnCorFundoEscuro');
        botaoTelaBlack.addEventListener('click', trocaCorFundoEscuro);

        //Esta linha mantem o estilo escuro salvo no browser quando carrega a página
        document.body.style.backgroundColor = localStorage.getItem('corAtual');

        function trocaCorFundoEscuro() {
            localStorage.corAtual = 'black';
            document.body.style.backgroundColor = localStorage.getItem('corAtual');
        }

        //mudar background fundo claro
        const botaoTelaWhite = document.getElementById('btnCorFundoClaro');
        botaoTelaWhite.addEventListener('click', trocaCorFundoClaro);

        function trocaCorFundoClaro() {
            localStorage.corAtual = 'white';
            document.body.style.backgroundColor = localStorage.getItem('corAtual');
        }

        //cor do texto branco
        const botaoCorDoTextoBranco = document.getElementById('btnCorTextobranco');
        botaoCorDoTextoBranco.addEventListener('click', trocarTextoParabranco);

        //Esse for grava no browser quando a página é carregada
        for(let i = 0; i < document.querySelectorAll('.texto').length; i += 1) {
            document.querySelectorAll('.texto')[i].style.color = localStorage.getItem('corDoTextoAtual');
        }

        function trocarTextoParabranco() {
            localStorage.corDoTextoAtual = 'white';
            for(let i = 0; i < document.querySelectorAll('.texto').length; i += 1) {
                document.querySelectorAll('.texto')[i].style.color = localStorage.getItem('corDoTextoAtual');
            }
        }

        //cor do texto preto
        const botaoCorDoTextoPreto = document.getElementById('btnCorTextoPreto');
        botaoCorDoTextoPreto.addEventListener('click', trocarTextoParaPreto);

        function trocarTextoParaPreto() {
            localStorage.corDoTextoAtual = 'black';
            for(let i = 0; i < document.querySelectorAll('.texto').length; i += 1) {
                document.querySelectorAll('.texto')[i].style.color = localStorage.getItem('corDoTextoAtual');
            }
        }


        //tamanho da fonte grande
        const botaoTamanhoDaFonteG = document.getElementById('btnTamanhoFonteGrande');
        botaoTamanhoDaFonteG.addEventListener('click', aumentarTamanhoLetra);

        for(let i = 0; i < document.querySelectorAll('.texto').length; i += 1) {
            document.querySelectorAll('.texto')[i].style.fontSize = localStorage.getItem('tamanhoTexto');
        }

        function aumentarTamanhoLetra() {
            for(let i = 0; i < document.querySelectorAll('.texto').length; i += 1) {
                localStorage.setItem('tamanhoTexto', 'xx-large');
                document.querySelectorAll('.texto')[i].style.fontSize = localStorage.getItem('tamanhoTexto');
            }
        }

        //tamanho da fonte pequena
        const botaoTamanhoDaFonteP = document.getElementById('btnTamanhoFontePequena');
        botaoTamanhoDaFonteP.addEventListener('click', diminuirTamanhoLetra);

        for(let i = 0; i < document.querySelectorAll('.texto').length; i += 1) {
            document.querySelectorAll('.texto')[i].style.fontSize = localStorage.getItem('tamanhoTexto');
        }

        function diminuirTamanhoLetra() {
            for(let i = 0; i < document.querySelectorAll('.texto').length; i += 1) {
                document.querySelectorAll('.texto')[i].style.fontSize = localStorage.getItem('tamanhoTexto');
                localStorage.setItem('tamanhoTexto', 'medium');
            } 
        }
        //espaço entre as linhas
        const bataoEspacoEntreLinhas = document.getElementById('btnEspaco');
        bataoEspacoEntreLinhas.addEventListener('click', espacoEntreLinhas);

        for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
            document.querySelectorAll('article')[i].style.lineHeight = localStorage.getItem('espacoEntreLinhas');
        }
        
        function espacoEntreLinhas() {
            for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
                localStorage.setItem('espacoEntreLinhas', '3');
                document.querySelectorAll('article')[i].style.lineHeight = localStorage.getItem('espacoEntreLinhas');
            }
        }

        //Retirar espaço entre as linhas
        const botaoParaRetirarEspaco = document.getElementById('btnRetirarEspaco');
        botaoParaRetirarEspaco.addEventListener('click', retirarEspacoEntreLinhas);

        for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
            document.querySelectorAll('article')[i].style.lineHeight = localStorage.getItem('btnRetirarEspaco');
        }

        function retirarEspacoEntreLinhas() {
            for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
                localStorage.setItem('espacoEntreLinhas', '1');
                document.querySelectorAll('article')[i].style.lineHeight = localStorage.getItem('btnRetirarEspaco');
            }
        }

        //Modificar fonte 1
        const botaoFonte1 = document.getElementById('btnTipoFonte1');
        botaoFonte1.addEventListener('click', modificarFonte1);

        for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
            document.querySelectorAll('article')[i].style.fontFamily = localStorage.getItem('modificarFonte');
        }

        function modificarFonte1() {
            for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
                localStorage.setItem('modificarFonte', 'cursive');
                document.querySelectorAll('article')[i].style.fontFamily = localStorage.getItem('modificarFonte');
            }
        }

        //Modificar fonte 2
        const botaoFonte2 = document.getElementById('btnTipoFonte2');
        botaoFonte2.addEventListener('click', modificarFonte2);

        for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
            document.querySelectorAll('article')[i].style.fontFamily = localStorage.getItem('modificarFonte');
        }

        function modificarFonte2() {
            for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
                localStorage.setItem('modificarFonte', 'Comic Sans MS');
                document.querySelectorAll('article')[i].style.fontFamily = localStorage.getItem('modificarFonte');
            }
        }

        //Modificar fonte 3
        const botaoFonte3 = document.getElementById('btnTipoFonte3');
        botaoFonte3.addEventListener('click', modificarFonte3);

        for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
            document.querySelectorAll('article')[i].style.fontFamily = localStorage.getItem('modificarFonte');
        }

        function modificarFonte3() {
            for(let i = 0; i < document.querySelectorAll('article').length; i += 1) {
                localStorage.setItem('modificarFonte', 'Arial');
                document.querySelectorAll('article')[i].style.fontFamily = localStorage.getItem('modificarFonte');
            }
        }