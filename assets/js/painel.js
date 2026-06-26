$(document).ready(() => {
    
    const $containerListAba = $('#list-tab-aba');
    const $containerPaneAba = $($containerListAba.data('target-pane'));
    
    $("body").on('click', '#btnControlPainelLateral', function () {

        let $btn = $(this);
        let $target = $($btn.data('target'));
       
        $target.toggle('slow');
        $btn.find('.icon-toggle-open').toggleClass('active');
        $btn.find('.icon-toggle-close').toggleClass('active');
        
    });

    $('body').on('click', '#list-tab-aba .list-group-item .btn-close', function(){
        let $btn = $(this),
            $itemList = $btn.parent(),
            $actionItemList = $btn.parent().find('.list-group-item-action'),
            $paneTarget = $($actionItemList.attr('href')),
            $list =  $itemList.parent(),
            active = false;        
        
        if($actionItemList.hasClass('active')){
            active = true;
        }

        $paneTarget.remove();
        $itemList.remove();

        if(active){
            let $nextItem = $($list.children()[0]).find('.list-group-item-action');
            $nextItem.addClass('active');
            $($nextItem.attr('href')).addClass('active');
        }
        
    });

    $('body').on('click', '#list-tab-modulo .nav-item', function(e){
        e.preventDefault();

        let $item = $(this);
        let $linkItem = $item.find('.nav-link');

        let nomeAba = $linkItem.text();
        let idAba = nomeAba.trim().toLowerCase().replace(/\s+/g, '');

        criarAba(idAba, nomeAba);
    });

    // $(document).on('click', 'a', function(e){
    //     e.preventDefault();
    //     let $el = $(this);
    //     let url = $el.attr('href');

    //     if (
    //         url === '#' ||
    //         url.startsWith('http') ||
    //         url.startsWith('mailto:') ||
    //         url.startsWith('tel:')
    //     ) {
    //         return;
    //     }

    //     let nomeAba = $el.text();
    //     let idAba = nomeAba.trim().toLowerCase().replace(/\s+/g, '');

    //     $.get(url, function(){
    //         criarAba(idAba, nomeAba);
    //     });
    // });

    
    function criarAba(idAba, nomeAba){
        

        if($(`#listAba-${idAba}-item`).length == 0){

            $containerListAba.append(`
                <div class="list-group-item">
                    <a class="list-group-item-action" data-bs-toggle="list" href="#listAba-${idAba}-pane" id="listAba-${idAba}-item" role="tab" aria-controls="listAba-${idAba}-pane">
                        ${nomeAba}
                    </a>
    
                    <button type="button" class="btn-close"></button>
                </div>
            `);
    
            $containerPaneAba.append(`
                <div class="tab-pane" id="listAba-${idAba}-pane" role="tabpanel">
                    <div class="h-100 w-100 d-flex justify-content-center align-items-center flex-column js_loading">
                        <span class="pb-2">Carregando ${nomeAba} </span>
                        <div class="spinner-border" role="status">
                        </div>
                    </div>
                </div>
            `);
        }

        abrirAba(idAba);
    }

    function abrirAba(idAba){
        $containerListAba.find('.list-group-item-action.active').removeClass('active');
        $containerPaneAba.find('.tab-pane.show.active').removeClass('show active');

        $(`#listAba-${idAba}-item`).addClass('active');
        $(`#listAba-${idAba}-pane`).addClass('show active');
    }


});