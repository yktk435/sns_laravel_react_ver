<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'Keanu Reeves',
            'user_id'=>'keanu',
            'password'=>1234,
            'email'=>'keanu@example.com',
            'icon'=>'https://pbs.twimg.com/media/EkAi8ieUYAAYHGA?format=jpg&name=small',
            'header'=>'https://pbs.twimg.com/media/Ej-V_uvUwAEbmKz?format=jpg&name=small',
        ];
        DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'Johnny Depp',
            'user_id'=>'johnny',
            'password'=>1234,
            'email'=>'johnny@example.com',
            'icon'=>'https://eiga.k-img.com/images/buzz/85666/41f1d64ee108b699/640.jpg',
            'header'=>'https://d1uzk9o9cg136f.cloudfront.net/f/16782943/rc/2020/08/08/4e1af126c4f81c163741014b7bc53c94d87706e5_xlarge.jpg',
        ];
        DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'Tom Cruise',
            'user_id'=>'tom',
            'password'=>1234,
            'email'=>'user@example.com',
            'icon'=>'https://www.crank-in.net/img/db/1393284_650.jpg',
            'header'=>'https://static-spur.hpplus.jp/upload/image/manager/174/E4hkNTE-300.jpg'
        ];
        DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'Emily Jean "Emma" Stone',
            'user_id'=>'ema',
            'password'=>1234,
            'email'=>'user@example.com',
            'icon'=>'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1OjrJ9xMOGmMFuqTNCpp5aIk52yDS7grIOw&usqp=CAU',
            'header'=>'https://img.cinematoday.jp/a/ThiIDSPVWQSa/_size_640x/A0003299-00.jpg'
        ];
        DB::table('members')->insert($param);
    }
}
