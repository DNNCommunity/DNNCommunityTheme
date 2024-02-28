
(function ($) {
    $(document).ready(function () {
        initPage(document);
    });
    $(document).on("opencontent.change", function (event, element) {
        initPage(element);
    });
    function initPage(element) {
        $(".sortableList", element).each(function () {

            var moduleid = $(this).attr('data-moduleid');
            var sf = $.ServicesFramework(moduleid);

            var el = $(this)[0];
            Sortable.create(el, {
                handle: '.sorthandle',
                animation: 150,
                store: {
                    get: function (sortable) {
                        return [];
                    },
                    set: function (sortable) {
                        var order = sortable.toArray();
                        $.ajax({
                            type: "POST",
                            url: sf.getServiceRoot('OpenContent') + "OpenContentAPI/ReOrder",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify(order),
                            beforeSend: sf.setModuleHeaders
                        }).done(function (data) {
                            
                        }).fail(function (xhr, result, status) {
                            console.error("Uh-oh, something broke: " + status);
                        });
                    }
                }
            });
        });
    }
}(jQuery));

