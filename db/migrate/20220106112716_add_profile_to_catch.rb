class AddProfileToCatch < ActiveRecord::Migration[6.1]
  def change
    add_reference :catches, :profile, index: true
  end
end
