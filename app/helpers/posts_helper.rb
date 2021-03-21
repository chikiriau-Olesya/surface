module PostsHelper
  # def render_with_hashtags(content)
  #   content.gsub(/#\w+/){|word| link_to word, "/posts/hashtag/#{word.delete('#')}"}.html_safe
  # end

  def render_with_hashtags(tagline)
    tagline.gsub(/#\w+/){|word| link_to word, "/posts/hashtag/#{word.delete('#')}"}.html_safe
  end
end
