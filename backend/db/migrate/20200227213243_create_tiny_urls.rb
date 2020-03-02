class CreateTinyUrls < ActiveRecord::Migration[6.0]
  def change
    create_table :tiny_urls do |t|
      t.string :long_url
      t.string :tiny_url

      t.timestamps
    end
  end
end
