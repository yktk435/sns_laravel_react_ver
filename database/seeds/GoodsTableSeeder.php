<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class GoodsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $param = [
            'member_id' => 1,
            'article_id' => 2,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        DB::table('goods')->insert($param);
        $param = [
            'member_id' => 1,
            'article_id' => 3,
            'created_at' => date("Y-m-d H:i:s"),
        ];
        DB::table('goods')->insert($param);
    }
}
