/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//var ID_BANNER_ADMOB_REAL = "ca-app-pub-3096329003114803/7523999379";
//var ID_BANNER_ADMOB_TEST = "ca-app-pub-3940256099942544/6300978111";

var url_c1 = "https://radioserver02.ccradio.es/api/nowplaying/ccradio";
var url_c2 = "https://radioserver02.ccradio.es/api/nowplaying/ccradio_canal_2";
var url_c3 = "https://radioserver02.ccradio.es/api/nowplaying/ccradio_canal_2";

var next_song_c1;
var next_song_c2;
var next_song_c3;

var current_listeners_c1;
var current_listeners_c2;
var current_listeners_c3;

$(document).ready( function() {
	
	setInterval(function(){ reloadInfoMusic(); }, 5000);
	
	$('#fs').click(function() {
		if($(this).is(':checked')){
			window.plugins.insomnia.keepAwake();
		}else{
			window.plugins.insomnia.allowSleepAgain();
		}
	});		
	
	function reloadInfoMusic(){
		$.getJSON(url_c1, function(c1_data){
			if(current_listeners_c1 !=  c1_data.listeners.current){
				current_listeners_c1 =  c1_data.listeners.current;
				info_oyentes_html = "<span style='font-size:10px;'>Oyentes conectados: " + c1_data.listeners.current + "</span>";
				$("#oyentes_c1").html(info_oyentes_html);
			}
			
			if(next_song_c1 != c1_data.playing_next.song.text){
				next_song_c1 = c1_data.playing_next.song.text;
				info_siguiente_cancion = "<span style='font-size:10px;'>Siguiente canción:<br><img src=" + c1_data.playing_next.song.art + " width='50'><br>"+ c1_data.playing_next.song.text + "</span>";
				$("#playing_c1").html(info_siguiente_cancion);
			}
		});
		
		$.getJSON(url_c2, function(c2_data){
			if(current_listeners_c2 !=  c2_data.listeners.current){
				current_listeners_c2 =  c2_data.listeners.current;
				info_oyentes_html = "<span style='font-size:10px;'>Oyentes conectados: " + c2_data.listeners.current + "</span>";
				$("#oyentes_c2").html(info_oyentes_html)
			}
			
			if(next_song_c2 != c2_data.playing_next.song.text){
				next_song_c2 = c2_data.playing_next.song.text;
				info_siguiente_cancion = "<br><span style='font-size:10px;'>Siguiente canción:<br><img src=" + c2_data.playing_next.song.art + " width='50'><br>"+ c2_data.playing_next.song.text + "</span>";
				$("#playing_c2").html(info_siguiente_cancion);
			}

		});
		$.getJSON(url_c3, function(c3_data){
			if(current_listeners_c3 !=  c3_data.listeners.current){
				current_listeners_c3 =  c3_data.listeners.current;
				info_oyentes_html = "<span style='font-size:10px;'>Oyentes conectados: " + c3_data.listeners.current + "</span>";
				$("#oyentes_c3").html(info_oyentes_html);				
			}
			
			if(next_song_c3 != c3_data.playing_next.song.text){
				next_song_c3 = c3_data.playing_next.song.text;
				info_siguiente_cancion = "<span style='font-size:10px;'>Siguiente canción:<br><img src=" + c3_data.playing_next.song.art + " width='50'><br>"+ c3_data.playing_next.song.text + "</span>";
				$("#playing_c3").html(info_siguiente_cancion);				
			}

		});
		
		
	};
	
});
