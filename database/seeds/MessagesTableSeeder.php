<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MessagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param=[
            'created_at'=>now(),
            'message'=>'1から2へ',
            'from_id'=>1,
            'to_id'=>2,
            'image'=>'https://image.rakuten.co.jp/nagashio/cabinet/okb9/4901601455700_1.jpg',
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>'1から3へ',
            'from_id'=>1,
            'to_id'=>3,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>'2から1へ',
            'from_id'=>2,
            'to_id'=>1,
            'image'=>'https://askul.c.yimg.jp/lpm/img/livingut/293061lh_3L.jpg',
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>'4から1へ',
            'from_id'=>4,
            'to_id'=>1,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>'2から1へ',
            'from_id'=>2,
            'to_id'=>1,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
    }
}
