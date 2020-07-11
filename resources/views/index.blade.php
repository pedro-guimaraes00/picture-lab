<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <base href="/">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <title>Laravel</title>
    </head>
    <body>
        <app-root></app-root>
        <script type="text/javascript" src="{{ asset("js/runtime.js") }}" defer></script>
        <script type="text/javascript" src="{{ asset("js/polyfills.js") }}" defer></script>
        <script type="text/javascript" src="{{ asset("js/styles.js") }}" defer></script>
        <script type="text/javascript" src="{{ asset("js/vendor.js") }}" defer></script>
        <script type="text/javascript" src="{{ asset("js/main.js") }}" defer></script>
    </body>
</html>
