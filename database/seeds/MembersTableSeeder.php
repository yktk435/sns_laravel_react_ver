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
        // $param=[
        //     'created_at'=>date("Y-m-d H:i:s"),
        //     'name'=>'けそポテト',
        //     'user_id'=>'keso_niconico',
        //     'password'=>123456789,
        //     'email'=>'user@example.com',
        //     'icon'=>'https://pbs.twimg.com/profile_images/1014424885769035777/f6KPqngC_400x400.jpg',
        //     'header'=>'https://pbs.twimg.com/profile_banners/783289792041594880/1475586873/1500x500'
        // ];
        // DB::table('members')->insert($param);
        // $param=[
        //     'created_at'=>date("Y-m-d H:i:s"),
        //     'name'=>'はねむーん',
        //     'user_id'=>'hanemoon920',
        //     'password'=>123456789,
        //     'email'=>'user@example.com',
        //     'icon'=>'https://pbs.twimg.com/profile_images/1193162093001768962/eBt6RkxQ_400x400.png',
        //     'header'=>'https://pbs.twimg.com/profile_banners/140200458/1583263514/600x200'
        // ];
        // DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'Keanu Reeves',
            'user_id'=>'keanu',
            'password'=>123456789,
            'email'=>'keanu@example.com',
            'icon'=>'https://pbs.twimg.com/media/EkAi8ieUYAAYHGA?format=jpg&name=small',
            'header'=>'https://pbs.twimg.com/media/Ej-V_uvUwAEbmKz?format=jpg&name=small',
        ];
        DB::table('members')->insert($param);
        $param=[
            'created_at'=>date("Y-m-d H:i:s"),
            'name'=>'Johnny Depp',
            'user_id'=>'johnny',
            'password'=>123456789,
            'email'=>'johnny@example.com',
            'icon'=>'https://eiga.k-img.com/images/buzz/85666/41f1d64ee108b699/640.jpg',
            'header'=>'https://d1uzk9o9cg136f.cloudfront.net/f/16782943/rc/2020/08/08/4e1af126c4f81c163741014b7bc53c94d87706e5_xlarge.jpg',
        ];
        DB::table('members')->insert($param);
        
    }
}
