cfg.Portrait;

function OnStart()
{
    app.ToBack();
    lay = app.CreateLayout( "Frame" );
lay.SetSize( 0.168,0.081)

    web = app.CreateWebView( 0.168,0.081,"IgnoreErrors,NoScrollBars" )
    web.LoadUrl( "Html/index.html" )
lay.AddChild( web );

    ovl = app.CreateOverlay();
    ovl.AddLayout( lay, 0.8, app.GetTop() );

}