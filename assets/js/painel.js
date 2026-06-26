$(document).ready(() => {
    
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

        let $containerList = $('#list-tab-aba');
        let $containerPane = $($containerList.data('target-pane'));

        let nameAba = $linkItem.text();
        let idAba = nameAba.trim().toLowerCase().replace(/\s+/g, '');
            
        let active = false;

        if($containerList.find('.list-group-item').length == 0){
            active = true
        }

        $containerList.append(`
            <div class="list-group-item">
                <a class="list-group-item-action" data-bs-toggle="list" href="#list-${idAba}-pane" id="list-${idAba}-item" role="tab" aria-controls="list-${idAba}-pane">
                    ${nameAba}
                </a>

                <button type="button" class="btn-close"></button>
            </div>
        `);

        $containerPane.append(`
            <div class="tab-pane" id="list-${idAba}-pane" role="tabpanel">${nameAba}</div>
        `);

        if(active){
            $(`#list-${idAba}-item`).addClass('active');
            $(`#list-${idAba}-pane`).addClass('active');
        }

    })


});