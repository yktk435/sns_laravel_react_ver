<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FriendsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'from' => 1,
            'to' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        DB::table('friends')->insert($param);
        $param = [
            'from' => 1,
            'to' => 3,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        DB::table('friends')->insert($param);
        $param = [
            'from' => 2,
            'to' => 1,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        DB::table('friends')->insert($param);
        $param = [
            'from' => 4,
            'to' => 1,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        DB::table('friends')->insert($param);
    }
}
