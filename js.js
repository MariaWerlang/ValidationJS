        //validando cpf
        function validarCPF(strCPF) {
            var Soma;
            var Resto;
            Soma = 0;
            if (strCPF == "00000000000") return false;

            for (i = 0; i < 9; i++) Soma = Soma + parseInt(strCPF.charAt(i)) * (10 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.charAt(9))) return false;

            Soma = 0;
            for (i = 0; i < 10; i++) Soma = Soma + parseInt(strCPF.charAt(i)) * (11 - i);
            Resto = (Soma * 10) % 11;

            if ((Resto == 10) || (Resto == 11)) Resto = 0;
            if (Resto != parseInt(strCPF.charAt(10))) return false;
            return true;
        }

        function validarFormulario() {
            var nome = document.getElementById("nome").value;
            var endereco = document.getElementById("endereco").value;
            var bairro = document.getElementById("bairro").value;
            var cep = document.getElementById("cep").value;
            var cidade = document.getElementById("cidade").value;
            var estado = document.getElementById("estado").value;
            var telefoneFixo = document.getElementById("telefoneFixo").value;
            var celular = document.getElementById("celular").value;
            var rg = document.getElementById("rg").value;
            var cpf = document.getElementById("cpf").value.replace(/\.|\-/g, "");

            //validando nome
            if(nome != ""){
                console.log("Tamanho do campo: " + nome.length)
            }else{
                console.log("O campo nome está vazio!")
            }

            //validando endereco
            if(endereco != ""){
                console.log("Tamanho do campo: " + endereco.length)
            }else{
                console.log("O campo endereço está vazio!")
            }

            //validando bairro
            if(bairro != ""){
                console.log("Tamanho do campo: " + bairro.length)
            }else{
                console.log("O campo bairro está vazio!")
            }

            //validando cep
            if(cep.length >= 10 || cep.length < 8){
                console.log("CEP Inválido!")
            }else{
                console.log("Tamamho do campo: " + cep.length)
            }

            //validando cidade
            if(cidade != ""){
                console.log("Tamanho do campo: " + cidade.length)
            }else{
                console.log("O campo cidade está vazio!")
            }

            //validando estado
            if(estado != ""){
                console.log("Tamanho do campo: " + estado.length)
            }else{
                console.log("O campo estado está vazio!")
            }

            //validando telefoneFixo
            if(telefoneFixo.length >= 10 || telefoneFixo.length < 8){
                console.log("Telefone Inválido!")
            }else{
                console.log("Tamamho do campo: " + telefoneFixo.length)
            }

            //validando celular
            if(celular.length >= 15 || celular.length < 11){
                console.log("Celular Inválido!")
            }else{
                console.log("Tamamho do campo: " + celular.length)
            }

            //validando RG
            if(rg.length >= 13 || celular.length < 9){
                console.log("RG Inválido!")
            }else{
                console.log("Tamamho do campo: " + rg.length)
            }
            
            //validando CPF
            if (validarCPF(cpf)) {
                console.log("CPF válido!");
            }else {
                console.log("CPF inválido!");
            }



            

        }


