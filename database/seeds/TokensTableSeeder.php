<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TokensTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param=[
            // 'id'=>10,
            "member_id"=>1,
            'created_at'=>date("Y-m-d H:i:s"),
            'access_token'=>"qwertyuiopasdfghjkl",
        ];
        DB::table('tokens')->insert($param);
        $param=[
            // 'id'=>10,
            "member_id"=>2,
            'created_at'=>date("Y-m-d H:i:s"),
            'access_token'=>"zxcvbnmasdfghjkqwertyuio",
        ];
        DB::table('tokens')->insert($param);
    }
}
