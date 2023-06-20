$(function(){
	barraPesquisar();
	botoesFiltro();
	scrollSobre();
/*--------chamando funções---------*/
	function botoesFiltro(){
		$('#todos').on('click',function(){
			$('.produto-single').css('display','flex');
			$('.produto-single').css('margin','20px auto 0 auto');
			$('#pesquisar').val('');
		});
		$('#capilar').on('click',function(){
			$('.capilar').css('display','flex');
			$('.acessorios').css('display','none');
			$('.gel').css('display','none');
			$('.mascara').css('display','flex');
			$('.produto-single').css('margin','20px auto 0 auto');
			$('#pesquisar').val('');
		});
		$('#acessorios').on('click',function(){
			$('.produto-single').css('margin','10px');
			$('.acessorios').css('display','flex');
			$('.capilar').css('display','none');
			$('.gel').css('display','none');
			$('.mascara').css('display','none');
			$('#pesquisar').val('');
		});
		$('#gel').on('click',function(){
			$('.produto-single').css('margin','auto');
			$('.gel').css('display','flex');
			$('.capilar').css('display','none');
			$('.acessorios').css('display','none');
			$('.mascara').css('display','none');
			$('#pesquisar').val('');
		});
	}

	function barraPesquisar(){
		$('#btnPesquisa').on('click',function(){
			
			const valorPesquisa = $('#pesquisar').val();
			const shamp = ['shampoo','kit','kit capilar','Kit capilar','capilar','unhas','cabelo','creme','Shampoo','Kit','Capilar','Unhas','Cabelo','Creme'];
			const masc = ['Máscara','Mascara','mascara','máscara','Máscara capilar','Mascara capilar','mascara capilar','máscara capilar'];
			const acess = ['Pente','Escova','Espelho','Acessórios','Acessorios','Acessorio','Acéssorio','pente','escova','espelho','acessórios','acessorios','acessorio','acessório'];
			const gel = ['gel','Gel','massagem','Massagem','Massageador','massageador','Canela','canela','junta','Junta','veio','Veio','Véi','véi','Dor','dor','alivio','Alivio'];
			//enquanto i for menor que a quantidade de shamp adiciona ate achar o valor correto
			for (let i = 0 ; i < shamp.length; i++) {
				//se valorpesquisa for igual ao a algu I da lista ele vai retornar os efeitos
				if (valorPesquisa == shamp[i]){
					$('.capilar').css('display','flex');
					$('.mascara').css('display','none');
					$('.acessorios').css('display','none');
					$('.gel').css('display','none');
					$('.produto-single').css('margin','20px auto 0 auto');
					$('[name=but]').attr('checked',false);
				}

			};
			for (let i = 0 ; i < masc.length; i++) {
				//se valorpesquisa for igual ao a algu I da lista ele vai retornar os efeitos
				if (valorPesquisa == masc[i]){
					$('.mascara').css('display','flex');
					$('.capilar').css('display','none');
					$('.acessorios').css('display','none');
					$('.gel').css('display','none');
					$('.produto-single').css('margin','10px');
					$('[name=but]').attr('checked',false);
				}

			};
			for (let i = 0 ; i < acess.length; i++) {

				if (valorPesquisa == acess[i]){
					$('.produto-single').css('margin','10px');
					$('.acessorios').css('display','flex');
					$('.capilar').css('display','none');
					$('.gel').css('display','none');
					$('.mascara').css('display','none');
					$('[name=but]').attr('checked',false);
				}
				
			};
			for (let i = 0 ; i < gel.length; i++) {

				if (valorPesquisa === gel[i]){
					$('.produto-single').css('margin','auto');
					$('.gel').css('display','flex');
					$('.capilar').css('display','none');
					$('.acessorios').css('display','none');
					$('.mascara').css('display','none');
					$('[name=but]').attr('checked',false);
				}
				
			};
			return false;
		});
	};

	function scrollSobre(){
		$('header .container .telefone > a').click(function(){
			var href = $(this).attr('href');
			var offSetTop = $(href).offset().top;

			$('html, body').animate({'scrollTop':offSetTop},1000);
		})


	}

})