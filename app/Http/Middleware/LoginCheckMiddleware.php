<?php

namespace App\Http\Middleware;

use Closure;
use App\Token;
use Symfony\Component\VarDumper\VarDumper;

class LoginCheckMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        $csrfToken = $request->header('X-CSRF-TOKEN');
        $accessToken = $request->header('access_token');
        // return response([$request->header('access_token')]);
        // $accessToken = "qwertyuiopasdfghjkl";
        $tokens = [
            "csrfToke" => $csrfToken,
            "access_token" => $accessToken
        ];

        $accountExist=Token::where('access_token',$accessToken)->first();
        if ($tokens["access_token"] == null) {
            // アクセストークンがないもしくはアクセストークンが違うからログインへリダイレクト
            // return redirect('/login');
            return response([
                "error"=>"ヘッダにアクセストークンがない",
                "access_token"=>$tokens['access_token'],
                "memberId"=>$request,
                ]);
        }else if($accountExist==null){
            return response([
                "error"=>"アクセストークンが古い",
                "accountExist"=>$accountExist,
                "access_token" => $accessToken,
                "request"=>$request,
                ]);
        }
        $request->merge(["member_id" =>$accountExist->toArray()['member_id']]);
        // print_r (json_encode($tokens));
        return $next($request);
    }
}
