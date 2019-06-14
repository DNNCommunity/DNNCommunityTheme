<!--#include file="partials/_registers.ascx" -->
<!--#include file="partials/_includes.ascx" -->

<!-- Header/NavBar -->
<!--#include file="partials/_header.ascx" -->

<!-- Main Content -->
<main>
  <div class="container-fluid bannerpane px-0 mb-0">
    <div class="justify-content-center">
      <div id="BannerFluidPane" class="text-center" runat="server"></div>
    </div>
  </div>

  <div class="container-fluid bannerpane bg-primary my-0">
    <div class="container my-0">
      <div class="row justify-content-center">
        <div id="BannerPane" class="col-md-12 text-center" runat="server"></div>
      </div>
    </div>
  </div>

  <div class="container-fluid bannerpane bg-light-grey my-0">
    <div class="container my-0">
      <div class="row justify-content-center">
        <div id="SubBannerPane" class="col-md-12 text-center" runat="server"></div>
      </div>
    </div>
  </div>

  <div class="container py-4">
    <div class="row justify-content-center">
      <div id="ContentPane" class="col-md-12" runat="server"></div> 
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div id="WideLeftPane" class="col-md-8 cpr-5" runat="server"></div>
      <div id="NarrowRightPane" class="col-md-4 bg-light-grey cp-5" runat="server"></div>
    </div>
  </div>   

  <div class="container-fluid bg-primary">
    <div class="container">
      <div class="row align-items-center">
        <div id="FullWidthBGDoublePaneOne" class="col-md-6 cpy-5" runat="server"></div>
        <div id="FullWidthBGDoublePaneTwo" class="col-md-6" runat="server"></div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div id="SinglePaneOne" class="col-md-8 text-center" runat="server"></div>
    </div>
  </div>    
</main>

<!-- Footer -->
<!--#include file="partials/_footer.ascx" -->