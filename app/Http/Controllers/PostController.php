<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Post;

class PostController extends Controller
{
  
    public function index()
    {
        $post = Post::all();
        return json_encode($post);
    }

    public function store(Request $request)
    {
        $post = new Post();

        $path = $request->file('arquivo')->store('images', 'public');
        $post->email     = $request->input('email');
        $post->nome      = $request->input('nome');
        $post->titulo    = $request->input('titulo');
        $post->subtitulo = $request->input('subtitulo');
        $post->mensagem  = $request->input('mensagem');
        $post->path      = $path;
        $post->likes     = 0;

        $post->save();
        return response($post);
    }

    public function like($id)
    {
        $post = Post::find($id);
            if(isset($post)) {
                $post->likes++;
                $post->save();

                return $post;
            }
            return response('Post não encontrado.');
    }

    public function destroy($id)
    {
        $post = Post::find($id);
            if(isset($post)) {
                Storage::disk('public')->delete($post->arquivo);
                $post->delete();
            }
            return response('Post não encontrado');
    }
}
