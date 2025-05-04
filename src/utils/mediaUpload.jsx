import { createClient } from "@supabase/supabase-js";

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhdmhyYXNkYmdsbWV5dWtlZHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYyNzA2MjMsImV4cCI6MjA2MTg0NjYyM30.eLmVZDrjdP2MsIvhB9tpv0rZP0fW6UfGb2VTD8Ifsf4"

const supabase_url = "https://iavhrasdbglmeyukedqa.supabase.co";

const supabase = createClient(supabase_url, anon_key);

export default function mediaUpload(file) {

    return new Promise((resolve, reject) => {
        if (file == null) {
            reject("No file selected");
        }
        const timestamp = new Date().getTime();
        const fileName = timestamp + file.name;

        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: '3600',
            upsert: false

        }).then((res) => {
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch(() => {
            reject("Error uploading file");
        })
    });
}





