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
            'id'=>10,
            'created_at'=>date("Y-m-d H:i:s"),
            'message'=>'メッセージ',
            'from_id'=>123,
            'to_id'=>1234,
            'read'=>1,
        ];
        DB::table('messages')->insert($param);
    }
}
