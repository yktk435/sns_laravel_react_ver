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
            'message'=>'山猫はかっこいい',
            'from_id'=>1,
            'to_id'=>2,
            'image'=>'https://hunting-laboratory.com/wp-content/uploads/2018/09/lynx-3374228_1920.jpg',
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>'トムへ',
            'from_id'=>1,
            'to_id'=>3,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>'三毛猫飼ってるよ',
            'from_id'=>2,
            'to_id'=>1,
            'image'=>'https://stat.ameba.jp/user_images/20200708/19/shellchan-mama/79/c9/j/o0607108014786085072.jpg?caw=800',
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>"マトリックス4がたのしみ",
            'from_id'=>4,
            'to_id'=>1,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
        $param=[
            'created_at'=>now(),
            'message'=>'マトリックスは最高だったよ',
            'from_id'=>2,
            'to_id'=>1,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
    }
}
