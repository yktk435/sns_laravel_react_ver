<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NotificationsTableSeeder extends Seeder
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
            'content'=>'テストcontent',
            'user_id'=>123,
            'read'=>1,
        ];
        DB::table('notifications')->insert($param);
    }
}
